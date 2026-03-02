import qs from 'qs'
import { ctaElementFragment, gridElementFragment, jumbotronFragment, referenceElementFragment } from '../fragments/queryFragments';

export const pagesQuery = qs.stringify({
    populate: {
        blocks: {
            on: {
                ...jumbotronFragment,
                ...referenceElementFragment,
                ...gridElementFragment,
                ...ctaElementFragment
            },
        },
    },
}, {
    encodeValuesOnly: true,
});
