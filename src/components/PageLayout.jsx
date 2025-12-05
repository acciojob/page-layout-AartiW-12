export default function PageLayout({header, footer , child}){
    return (
        <div>
            <header>{header}</header>
            <div>{child}</div>
            <footer>{child}</footer>
        </div>
    )
}