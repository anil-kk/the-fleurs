
import Image from "next/image";
import loader from "@/assets/loader.gif";

const Loading = () => {
    return (<div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
    }}>
        <Image src={loader} alt="Loading..." width={100} height={100} />
    </div>);
}

export default Loading;