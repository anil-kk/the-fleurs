
import { cn } from "@/lib/utils";
const ProductPrice = ({ value, className }: { value: number; className?: string }) => {

    const stringValue = value.toFixed(2);

    const [integerPart, decimalPart] = stringValue.split('.');

    return (
        <p className={cn("text-2xl", className)}>

            <span className="text-xs align-super">SEK</span>
            {integerPart}
            <span className="text-xs align-super"> .{decimalPart}</span>
        </p>
    );
}

export default ProductPrice;