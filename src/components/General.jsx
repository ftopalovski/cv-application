function General () {
    const name = "Filip Topalovski";
    const email = "ftopalovski@gmail.com";
    const phone = "905-746-5088"

    return <>
        <div>
            <h1>General Information:</h1>
            <ul>
                <li>Name: {name}</li>
                <li>E-mail: {email}</li>
                <li>Phone: {phone}</li>
            </ul>
        </div>
    </>
}

export default General;