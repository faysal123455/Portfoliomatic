const getExtensionFromMimeType = mimeType => {
    const list = {
        'image/gif' : 'gif',
        'image/jpeg' : 'jpg',
        'image/png' : 'png',
        'image/webp' : 'webp',
    }

    return list[mimeType];
}

export { getExtensionFromMimeType }