import React from 'react'
import ContentLoader from 'react-content-loader'

const CardSkeleton = props => (
	<ContentLoader speed={2} width={280} height={457} viewBox='0 0 280 457' backgroundColor='#f3f3f3' foregroundColor='#ecebeb' {...props}>
		<rect x='13' y='265' rx='0' ry='0' width='235' height='30' />
		<rect x='136' y='410' rx='8' ry='8' width='118' height='42' />
		<rect x='13' y='419' rx='0' ry='0' width='76' height='25' />
		<rect x='12' y='309' rx='11' ry='11' width='240' height='84' />
		<circle cx='133' cy='128' r='115' />
	</ContentLoader>
)

export default CardSkeleton
