import MainNavigation from "../components/MainNavigation";

function ErrorPages() {
    return (
        <>
            <MainNavigation />
            <main>
                <h1>An Error occurred!</h1>
                <p>could not find this page!</p>
            </main>
        </>
    );
}

export default ErrorPages;
