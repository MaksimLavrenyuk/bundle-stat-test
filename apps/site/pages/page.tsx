import dynamic from "next/dynamic";


const Example = dynamic(() => import('../components/example'), {
    ssr: false,
})

export default function Page() {
    return (
        <span>
            index
            <Example />
        </span>
    );
}
