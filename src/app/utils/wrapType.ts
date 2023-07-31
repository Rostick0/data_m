export type wrap_type = 'skip' | 'right' | 'left' | 'center';

const wrapType = [
    {
        value: 'skip',
        name: 'Не применять'
    },
    {
        value: 'right',
        name: 'По правому'
    },
    {
        value: 'left',
        name: 'По левому'
    },
    {
        value: 'center',
        name: 'По центру'
    },
];

export const wrapTypeSelectItems = (() => {
    return [...wrapType]?.map(({ value, name }) => {
        return {
            value,
            name
        };
    })
})();