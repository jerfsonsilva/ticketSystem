import './Loading.css'

export default function Loading() {
    const cube: Array<Array<string>> = [
        ['L', 'W', 'L', 'W'],
        ['O', 'A', 'O', 'A'],
        ['A', 'I', 'A', 'I'],
        ['D', 'T', 'D', 'T'],
        ['I', '.', 'I', '.'],
        ['N', '.', 'N', '.'],
        ['G', '.', 'G', '.']
    ]

    return (
        <div className="col-12 text-center loading">
            <div className="scene" >
                <div className="word">
                    {
                        cube.map(letters => {
                            return (
                                <div className="letter__wrap">
                                    <div className="letter" data-letter={letters[0]}>
                                        {letters.map(letter => {
                                            return (
                                                <span className="letter__panel" aria-hidden="true">{letter}</span>
                                            )
                                        })}
                                        <span className="letter__panel"></span>
                                    </div>
                                </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}