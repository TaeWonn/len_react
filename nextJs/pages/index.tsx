import fetch from 'node-fetch';

function Index ({ data }){

    return <div>
        Dog Api
        <img src={data.message}/>
    </div>;
};

export async function getStaticProps(context) {
    const res= await fetch(
        "https://dog.ceo/api/breeds/image/random"
        ,''
    );

    const data = await res.json();

    return {
        props: {data}
    }
};

export default Index;