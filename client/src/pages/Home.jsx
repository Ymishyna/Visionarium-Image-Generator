import React, { useState, useEffect } from "react";
import { Loader, Card, InputField } from "../components";

const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => <Card key={post.id} {...post} />);
    }

    return (
        <h2 className="mt-5 font-bold text-[#6449ff] text-xl uppetcase">{title}</h2>
    )
}

const Home = () => {

    //state variables for the component to store data and loading state of the component 
    const [loading, setLoading] = useState(false); //loading state
    const [allPosts, setAllPosts] = useState(null); // all images state
    const [searchText, setSearchText] = useState(''); // search text state


    return (
        <section className="max-w-7xl mx-auto">
            <div>
                <h1 className="font-extrabold text-[#222328] text-[32px]">The Exhibition of Collaborative Creations</h1>
                <p className="mt-2 text-[#666e75] text-[16px] max-w[500px]">Discover a curated VISIONARIUM showcasing imaginative and visually stunning images crafted by DALL-E AI.</p>
            </div>

            <div className="mt-16">
                <InputField />

            </div>

            <div className="mt-10">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {searchText && (
                            <h2 className="font-medium text-[#666e75] text-xl mb-3">Showing results for <span className="text-[#222328]">{searchText}</span>
                            </h2>
                        )}
                        <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                            {searchText ? (
                                <RenderCards
                                    data={[]}
                                    title="No search results found" />
                            ) : (
                                <RenderCards
                                    data={[]}
                                    title="No posts found" />
                            )}

                        </div>
                    </>
                )}
            </div>
        </section>
    )
}

export default Home;