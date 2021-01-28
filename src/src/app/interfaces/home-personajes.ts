export interface InterfaceHomePersonajes {
    "code": number,
    "status": string,
    "copyright": string,
    "data": {
        "results": Array<
            {
                "id": number,
                "name": string,
                "description": string,
                "thumbnail": {
                    "path": string,
                    "extension": string
                },
                "comics": {
                    "available": number
                },
                "series": {
                    "available": number
                },
                "stories": {
                    "available": number
                }
            }>,
    }
}
