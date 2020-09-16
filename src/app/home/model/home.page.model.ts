export interface IFeaturesModel{
    logoName: string;
    shortDescription: string;
    longDescription: string;
}

const featuresList: IFeaturesModel[] = [
    {
        logoName: 'assessment',
        shortDescription : 'Insert any kind of chart',
        longDescription:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda harum \
                            cumque amet, hic fugit dicta non commodi molestiae suscipit. Accusantium cum \
                            quasi quidem quos. Aut nam nemo perspiciatis iste.'
    },
    {
        logoName: 'filter',
        shortDescription : 'DownLoad final output in any format you want',
        longDescription:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda harum \
                            cumque amet, hic fugit dicta non commodi molestiae suscipit. Accusantium cum \
                            quasi quidem quos. Aut nam nemo perspiciatis iste.'
    },
    {
        logoName: 'view_quilt',
        shortDescription : 'Create Your Own layout',
        longDescription:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda harum \
                            cumque amet, hic fugit dicta non commodi molestiae suscipit. Accusantium cum \
                            quasi quidem quos. Aut nam nemo perspiciatis iste.'
    },
    {
        logoName: 'dashboard',
        shortDescription : 'Select The layout you want',
        longDescription:   'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab assumenda harum \
                            cumque amet, hic fugit dicta non commodi molestiae suscipit. Accusantium cum \
                            quasi quidem quos. Aut nam nemo perspiciatis iste.'
    }
];


export { featuresList };
