export const getStaticProps = async () => {
    // Fetch posts data from an API
    const res = await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-03-28&to=2023-03-27&sortBy=popularity&apiKey=3a20a74863744e82b8f78a52f3760908");
    const posts = await res.json();

    return {
        props: { myPosts: posts },
    };
};
