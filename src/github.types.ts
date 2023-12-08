export interface RepositoryInfo {
    /**
    Identifies the date and time when the repository was archived.
*/
    archivedAt?: string,
  
    /**
    Identifies the date and time when the object was created.
*/
    createdAt: string,
  
    /**
    The description of the repository.
*/
    description?: string,
  
    /**
    The description of the repository rendered to string.
*/
    descriptionstring: string,
  
    /**
    Returns how many forks there are of this repository in the whole network.
*/
    forkCount: number,
  
    /**
    Indicates if the repository has the Discussions feature enabled.
*/
    hasDiscussionsEnabled: boolean,
  
    /**
    Indicates if the repository has issues feature enabled.
*/
    hasIssuesEnabled: boolean,
  
    /**
    Indicates if the repository has the Projects feature enabled.
*/
    hasProjectsEnabled: boolean,
  
    /**
    Indicates if the repository has wiki feature enabled.
*/
    hasWikiEnabled: boolean,
  
    /**
    The repository's URL.
*/
    homepageUrl: string,
  
    /**
    Indicates if the repository is unmanumberained.
*/
    isArchived: boolean,
  
    /**
    Identifies if the repository is a fork.
*/
    isFork: boolean,
  
    /**
    Indicates if a repository is either owned by an organization, or is a private fork of an organization repository.
*/
    isInOrganization: boolean,
  
    /**
    Indicates if the repository has been locked or not.
*/
    isLocked: boolean,
  
    /**
    Identifies if the repository is a mirror.
*/
    isMirror: boolean,
  
    /**
    Identifies if the repository is private or numberernal.
*/
    isPrivate: boolean,
  
    /**
    Identifies if the repository is a template that can be used to generate new repositories.
*/
    isTemplate: boolean,

    /**
    The repository's original mirror URL.
*/
    mirrorUrl: string,
  
    /**
    The name of the repository.
*/
    name: string,
  
    /**
    The repository's name with owner.
*/
    nameWithOwner: string,
  
    /**
    The image used to represent this repository in Open Graph data.
*/
    openGraphImageUrl: string,
  
    /**
    Identifies the date and time when the repository was last pushed to.
*/
    pushedAt: string
  
    /**
    The HTTP path for this repository
*/
    resourcePath: string,
    /**
    Identifies the date and time when the object was last updated.
*/
    updatedAt: string,
  
    /**
    The HTTP URL for this repository
*/
    url: string,
  
    /**
    Whether this repository has a custom image to use with Open Graph as opposed to being represented by the owner's avatar.
*/
    usesCustomOpenGraphImage: boolean
  }