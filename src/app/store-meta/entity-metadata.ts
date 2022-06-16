import { EntityMetadataMap } from "@ngrx/data";


export function getPosts(post: any): string {
    return post;
  }
export const entityMetadata: EntityMetadataMap = { 
    Post: {
        entityName: 'Post',

    }
}

const pluralNames = {Post: 'Posts'}

export const entityConfig = {
    entityMetadata, pluralNames
}