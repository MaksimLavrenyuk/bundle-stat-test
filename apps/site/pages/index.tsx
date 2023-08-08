import dynamic from "next/dynamic";


const Example = dynamic(() => import('../components/example'), {
    ssr: false,
})

export default function Index() {
    return (
        <span>
            index
            <Example />
        </span>
    );
}
