import { Search, MapPin } from "lucide-react";

import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";

function SearchBar() {
    return (
        <div className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl md:flex-row">
            {/* Search Input */}
            <div className="flex flex-1 items-center px-5">
                <Search
                    size={20}
                    className="mr-3 text-gray-400"
                />

                <Input
                    type="text"
                    placeholder="Search events, artists, workshops..."
                    className="border-none bg-transparent shadow-none focus:ring-0"
                />
            </div>

            {/* Divider */}
            <div className="hidden w-px bg-gray-200 md:block" />

            {/* Location */}
            <button
                type="button"
                className="flex items-center gap-2 px-5 py-4 text-gray-600 transition hover:bg-gray-50"
            >
                <MapPin
                    size={18}
                    className="text-indigo-600"
                />

                <span>Srinagar</span>

                <span className="text-sm">▼</span>
            </button>

            {/* Search Button */}
            <div className="p-2">
                <Button>
                    Search
                </Button>
            </div>
        </div>
    );
}

export default SearchBar;