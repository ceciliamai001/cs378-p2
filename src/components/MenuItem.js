import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className='container'>
            <div class="row"> 
                <div class = "col-4">
                    <img className="menu-image-rounded" src={require(`../images/${imageName}`)} alt={title} />
                </div>
                <div class = "col-8">
                    <div style={{ paddingLeft: '20px' }}>
                        <h2>{title}</h2>
                        <p className='description'>{description}</p>
                        <div class="row">
                            <div class="col-8">
                                <p>{price}</p>
                            </div>
                            <div class="col-4">
                                <button className="rounded" style={{float:'right'}}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-12"></div>
            </div>
        </div>
    );
};

export default MenuItem;