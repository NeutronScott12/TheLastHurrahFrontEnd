import React, { Suspense } from 'react'
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import moment from 'moment'
import { LoadingComponent } from '../../../partials/Loading'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Comments Per Day',
		},
	},
}

export interface ICommentGraph {
	info: Array<{
		__typename?: 'CommentsPerDay'
		count: number
		date: any
	}>
}

export const CommentGraph: React.FC<ICommentGraph> = (info) => {
	let labels = info.info.map((obj) => moment(obj.date).format('DD-MM-YYYY'))
	let statData = info.info.map((obj) => Math.trunc(obj.count))

	const data = {
		labels,
		datasets: [
			{
				label: 'Comments',
				data: statData,
				borderColor: 'rgb(255, 99, 132)',
				backgroundColor: 'rgba(255, 99, 132, 0.5)',
			},
		],
	}

	return (
		<Suspense fallback={LoadingComponent}>
			<h2>Comment Graph</h2>
			<Line options={options} data={data} />
		</Suspense>
	)
}
