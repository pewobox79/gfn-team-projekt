import qs from 'qs'
import { jumbotronFragment, referenceElementFragment } from '../fragments/queryFragments';

export const pagesQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                ...jumbotronFragment,
                ...referenceElementFragment
            },
        },
    },
}, {
    encodeValuesOnly: true,
});
