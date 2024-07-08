export default function Category ({ options }) {
    return (
        <div>
            {
                options.map((trend, index) => {
                        return (
                            <span key={index}>
                                <a href={`/git/${trend}`} key={index}>
                                    { trend }
                                </a>
                                <br />
                            </span>
                        )
                    }
                )
            }
        </div>
    )
}