import React, { Fragment } from "react";
import mediaVid from './media/communityProblem.mp4';

export const mcDetails = <Fragment>
	<h3 className="topic-label">Media Campaign</h3>
	<h4 className="label">A 2 minute video about a community problem we continue to face today.</h4>
	<video controls style={ {
		marginTop: '14px'
	} }>
		<source src={ mediaVid } type="video/mp4" />
		Your browser does not support the video tag.
	</video>
</Fragment>

export const opmDetails = <Fragment>
	<h3 className="topic-label">Magda</h3>
	<p>
		Magda by Gloc 9 featuring Rico Blanco is about a boy named Ernesto who has a female friend who is beautiful and loved by many. The title is Magda which is short for the name of the girl Magdalena.
	</p>
	<p>
		Their story begins with their peaceful days in the barrio until it was cut short when Magdalena meets a man from Manila who takes her away.
	</p>
	<p>
		Gone is the innocent maiden of the barrio as she is deceived and led astray. She becomes a lady of the night, helplessly and hopelessly trapped in the cruel life.
	</p>
	<p>
		The song is deep with sensitive topics discussed which opens our eyes to the different lifestyles and different circumstances that leads to who they are in the present
	</p>
	<iframe width="100%" height="500px" src="https://www.youtube.com/embed/Qp68KeRK90Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</Fragment>
