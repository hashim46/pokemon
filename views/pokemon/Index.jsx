import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'

function Index(props) {
    // can't use hooks or state 
    // can't use event listeners in the same way
    return (
        <DefaultLayout title="Index View">
            <div>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {props.pokemon.map((fruit, index) => 
                        <li key={index}>
                            <a href={`/pokemon/${fruit._id}`}><strong>{fruit.name}</strong></a>
                        </li>
                    )}
                </ul>
                <a href="/pokemon/new">Add...</a>

                <br/><br/><br/>

                <form action="/pokemon/seed" method="POST">
                    <button>SEED</button>
                </form>

                <br/>

                <form action="/pokemon/clear?_method=DELETE" method="POST">
                    <button>CLEAR</button>
                </form>
            </div>
        </DefaultLayout>
    )
}

export default Index