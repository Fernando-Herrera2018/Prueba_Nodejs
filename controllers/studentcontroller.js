function postStudent(body) {
    let isOk = false
    let ok = validate(body)
    if (ok) {
        isOk = true
    }
    return isOk
}

function validate(body) {
    let ok = false
    if (body && typeof body === 'object' && Object.keys(body).length > 0) {
        if (body.name !== '' && body.name.length > 3) {
            if (body.age > 0 && body.age.length > 0) {
                if (body.id !== '' && body.id.length !== 0) {
                    ok = true
                }
            }

        }
    }
    return ok
}

module.exports = {
    postStudent
}