import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout';

function Show(props) {
    return (
        <DefaultLayout title="Show View">
            <h1>Gotta Catch 'Em All"</h1>
            <h2> {props.pokemon.name} </h2>
            <img src = {`${props.pokemon.img}.jpg`}/>
            <br/>
            <a href="/pokemon">Back</a>   <br />
            
            <br /><br />


            <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

          

            

            
        </DefaultLayout>
    )
}

export default Show;