import React, { useRef } from 'react';

const Addmenu = () => {
    // const { nameRef, imgRef, driscriptionRef, imgRef } = useRef();
    const nameRef = useRef()
    const numberRef = useRef()
    const driscriptionRef = useRef()
    const imgRef = useRef()
    const handlemenu = e => {
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const driscription = driscriptionRef.current.value;
        const image = imgRef.current.value;
        const newMenu = { name, number, driscription, image, }
        console.log(newMenu)
        fetch('http://localhost:5000/menus', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newMenu)
        })
            .then(res => res.json)
            .then(data => {
                if (data.insertedId) {
                    alert('add menu succssesfully')
                    e.target.reset();
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handlemenu}>

                <div class="mb-3">
                    {/* <label for="formGroupExampleInput" class="form-label">Example label</label> */}
                    <input type="text" class="form-control" ref={nameRef} id="formGroupExampleInput" placeholder="Name" />
                </div>
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                    <input type="number" class="form-control" ref={numberRef} id="formGroupExampleInput2" placeholder="Price" />
                </div>
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                    <input type="url" class="form-control" ref={imgRef} id="formGroupExampleInput2" placeholder="Image-Url" />
                </div>
                <div class="mb-3">
                    {/* <label for="formGroupExampleInput2" class="form-label">Another label</label> */}
                    <textarea name="" class="form-control" ref={driscriptionRef} id="formGroupExampleInput2" cols="10" rows="3" placeholder="Driscription"></textarea>
                </div>



                <button type="submit" class="btn btn-primary">ADD MENU</button>
            </form>
        </div>
    );
};

export default Addmenu;