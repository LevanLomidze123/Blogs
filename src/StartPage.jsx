import './StartPage.css'

export default function StartPage() {
    return (
        <main>
            <div id='Beginning'>
                <h1 id='სათაური'>ბლოგი</h1>
                <img id='SpacePicture' src="src\Blog-1024x355 1.png" alt="Blog Picture" />
            </div>

            <nav>
                <div id='Filter'>
                    <button id='მარკეტი'>მარკეტი</button>
                    <button id='აპლიკაცია'>აპლიკაცია</button>
                    <button id='ხელოვნური_ინტელექტი'>ხელოვნური ინტელექტი</button>
                    <button id='UI_UX'>UI/UX</button>
                    <button id='კვლევა'>კვლევა</button>
                    <button id='Figma'>Figma</button>
                </div>
            </nav>
        </main>
    );
}