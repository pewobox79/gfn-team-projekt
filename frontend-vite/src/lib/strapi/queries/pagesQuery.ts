import qs from 'qs'
import { gridElementFragment, jumbotronFragment, referenceElementFragment } from '../fragments/queryFragments';

export const pagesQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                ...jumbotronFragment,
                ...referenceElementFragment,
                ...gridElementFragment
            },
        },
    },
}, {
    encodeValuesOnly: true,
});
