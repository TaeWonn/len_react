import Document, {Head, Main, Nextscript} from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
    static getInitialProps({ renderpage }){
        const {html, body} = renderPage();
        const styles =  flusg();

        return {html, body, styles};
    }

    render() {
        return (
            <html>
                <Head>
                    <style>{`body {margin: 0} /* custom! */`}</style>
                    <title>Next.js 연습</title>
                </Head>
                <body>
                    <Main />
                    <Nextscript/>
                </body>
            </html>
        );
    }
}