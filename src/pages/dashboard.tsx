import Layout from "../components/layout/layout";

export default function Dashboard(){
    return (
        <Layout>
            <div className="flex gap-2 flex-wrap">
                {[...Array(10)].map(() =>
                    <span className="bg-white text-black rounded-md border-l-4 border-l-teal-500 p-3">
                        Test Content
                    </span>)
                }

            </div>
        </Layout>
    )
}