import { useDebounceCallback } from "@/lib/hooks/useDebounceCallback";
import { Select, Spin } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

export default function DebounceSelect({
    fetchOptions,
    debounceTimeout = 300,
    // onAddOption,
    ...props
}) {
    const [fetching, setFetching] = useState(false);
    const [options, setOptions] = useState([]);
    const [searchText, setSearchText] = useState("");
    const fetchRef = useRef(0);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    // Fetch Function
    const loadOptions = useCallback(
        (searchValue = "") => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setFetching(true);

            fetchOptions(searchValue)
                .then((newOptions) => {
                    if (!isMounted.current || fetchId !== fetchRef.current)
                        return;
                    setOptions(newOptions || []);
                    setFetching(false);
                })
                .catch(() => {
                    if (isMounted.current) setFetching(false);
                });
        },
        [fetchOptions],
    );

    // Debouncing Search
    const debouncedSearch = useDebounceCallback((value) => {
        setSearchText(value);
        loadOptions(value);
    }, debounceTimeout);

    // Dropdown Initial List Handler
    const handleDropdownVisibleChange = (open) => {
        if (open) {
            loadOptions("");
        } else {
            setSearchText(""); // Clear DropDown when search close
        }
        if (props.onDropdownVisibleChange) {
            props.onDropdownVisibleChange(open);
        }
    };

    return (
        <Select
            labelInValue
            showSearch
            filterOption={false}
            onSearch={debouncedSearch}
            onDropdownVisibleChange={handleDropdownVisibleChange}
            placeholder="Select staff"
            allowClear
            notFoundContent={
                fetching ? (
                    <div style={{ textAlign: "center", padding: "8px 0" }}>
                        <Spin size="small" />
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 0",
                        }}
                    >
                        <span>No results found</span>

                        {/* Button onAddOption */}
                        {/* {onAddOption && (
                            <Button
                                type="primary"
                                size="small"
                                onClick={() => onAddOption(searchText)}
                            >
                                Add "{searchText}" as Issue Type
                            </Button>
                        )} */}
                    </div>
                )
            }
            {...props}
            options={options}
            optionRender={(option) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                    {option.label}
                </div>
            )}
        />
    );
}
