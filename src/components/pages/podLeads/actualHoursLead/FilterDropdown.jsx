import { useState, useRef, useEffect } from "react";
import { Filter, ChevronDown } from "lucide-react";
 
const FilterDropdown = ({ selectedFilter, onFilterChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
 
    const options = ["All", "Active", "Completed", "Hold"];
 
 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
 
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
 
    const handleSelect = (option) => {
        onFilterChange(option);
        setIsOpen(false);
    };
 
    return (
        <div className="filter-dropdown-container" ref={dropdownRef} style={{ position: "relative" }}>
            <div
                className="filter-dropdown"
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "8px 12px",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    background: "white",
                    fontSize: "14px",
                    color: "#374151",
                    cursor: "pointer",
                    minWidth: "120px",
                    justifyContent: "space-between"
                }}
            >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Filter size={16} />
                    <span>{selectedFilter}</span>
                </div>
                <ChevronDown size={14} />
            </div>
 
            {isOpen && (
                <div className="filter-menu" style={{
                    position: "absolute",
                    top: "110%",
                    right: 0,
                    width: "100%",
                    minWidth: "140px",
                    background: "white",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    zIndex: 10,
                    overflow: "hidden"
                }}>
                    {options.map((option) => (
                        <div
                            key={option}
                            className="filter-option"
                            onClick={() => handleSelect(option)}
                            style={{
                                padding: "10px 16px",
                                fontSize: "14px",
                                color: "#374151",
                                cursor: "pointer",
                                transition: "background 0.2s",
                                background: selectedFilter === option ? "#f3f4f6" : "white"
                            }}
                            onMouseEnter={(e) => e.target.style.background = "#f9fafb"}
                            onMouseLeave={(e) => e.target.style.background = selectedFilter === option ? "#f3f4f6" : "white"}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
 
export default FilterDropdown;
 