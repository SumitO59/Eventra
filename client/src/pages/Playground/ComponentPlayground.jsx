import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import Card from "../../components/ui/Card";
import { Search, Filter, Eye } from "lucide-react";

function ComponentPlayground() {
    return (
        <div className="min-h-screen p-10 space-y-10 bg-gray-50">

         <div className="max-w-md space-y-6">
    <Card className="max-w-sm">
    <h3 className="text-xl font-semibold">
        Music Festival
    </h3>

    <p className="mt-2 text-gray-600">
        July 20 • Srinagar
    </p>
</Card>

<Card
    hoverable
    className="max-w-sm"
>
    <h3 className="text-xl font-semibold">
        Tech Conference
    </h3>

    <p className="mt-2 text-gray-600">
        August 12 • Delhi
    </p>
</Card>
    <Input
        label="Search"
        placeholder="Search events..."
    />

    <Input
        label="Disabled"
        placeholder="Can't type here"
        disabled
    />

    <Input
        label="Location"
        placeholder="Enter city"
        error="Location is required"
    />
    <Input
    label="Search"
    placeholder="Search events..."
    leadingIcon={<Search size={18} />}
/>

<Input
    label="Filter"
    placeholder="Choose category..."
    trailingIcon={<Filter size={18} />}
/>

<Input
    label="Password"
    type="password"
    placeholder="Enter password"
    trailingIcon={<Eye size={18} />}
/>
</div>
        </div>
    );
}

export default ComponentPlayground;