// PROJECT LOGOS
import magda from './images/projects/magda.png';
import campaign from './images/projects/mediaCampaign.jpg';

import {
	mcDetails,
	opmDetails
} from './ProjectDetails';

export const projectList = [
	{
		id: 'media-campaign',
		subject: {
			name: 'Community Problem'
		},
		title: 'Media Campaign',
		image: campaign,
		details: mcDetails
	}, {
		id: 'blog-post',
		subject: {
			name: 'OPM video'
		},
		title: 'Magda',
		image: magda,
		details: opmDetails
	}
]
