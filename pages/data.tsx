export const getStaticProps = async () => {
    // Fetch posts data from an API
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await res.json();

    console.log(posts); // Check the fetched data

    return {
        props: { myPosts: posts },
    };
};
