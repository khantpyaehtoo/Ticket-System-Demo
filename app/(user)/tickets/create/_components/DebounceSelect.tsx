import { useDebounceCallback } from "@/lib/hooks/useDebounceCallback";
import { Select, SelectProps, Spin } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";

// 1. Option Structure type
export interface DebounceSelectOption {
    label: React.ReactNode;
    value: string | number;
    [key: string]: unknown;
}

// 2. DebounceSelect Props Interface
export interface DebounceSelectProps<ValueType = unknown> extends Omit<
    SelectProps<ValueType>,
    "options"
> {
    fetchOptions: (search: string) => Promise<DebounceSelectOption[]>;
    debounceTimeout?: number;
    onAddOption?: (searchValue: string) => void;
}

export default function DebounceSelect<ValueType = unknown>({
    fetchOptions,
    debounceTimeout = 300,
    // onAddOption,
    ...props
}: DebounceSelectProps<ValueType>) {
    const [fetching, setFetching] = useState<boolean>(false);
    const [options, setOptions] = useState<DebounceSelectOption[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const fetchRef = useRef<number>(0);
    const isMounted = useRef<boolean>(true);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    // Fetch Function
    const loadOptions = useCallback(
        (searchValue: string = "") => {
            fetchRef.current += 1;
            const fetchId = fetchRef.current;
            setFetching(true);

            fetchOptions(searchValue)
                .then((newOptions: DebounceSelectOption[]) => {
                    // newOptions type
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
    const debouncedSearch = useDebounceCallback((value: string) => {
        setSearchText(value);
        loadOptions(value);
    }, debounceTimeout);

    // Dropdown Initial List Handler
    const handleDropdownVisibleChange = (open: boolean) => {
        // open: boolean type
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
