/**
 * home-comics.ts
 * Interfaz de cómics, basada en la response de la api de marvel
 */

export interface InterfaceHomeComics {
    "code": number,
    "status": string,
    "attributionText": string,
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
