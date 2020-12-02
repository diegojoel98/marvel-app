export interface InterfaceHomeComics {
    "code": number,
    "status": string,
    "copyright": string,
    "data": {
        "results": Array<
            {
                "id": number,
                "title": string,
                "variantDescription": string,
                "description": string,
                "thumbnail": {
                    "path": string,
                    "extension": string
                },
                "creators": {
                    "available": number
                },
                "characters": {
                    "available": number
                },
                "stories": {
                    "available": number
                },
                "events": {
                    "available": number
                }
            }>,
    }
}
