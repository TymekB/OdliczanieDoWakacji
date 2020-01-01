let app = new Vue({
	el: "#countdown",
	data: {
			startDate: new Date(2019, 8, 2),
			endDate: new Date(2020, 5, 27),
			dateDifference: null,
			progress: null
	},
	methods: {
		countDateDifference(end) {

				const units = countdown.DAYS | countdown.HOURS | countdown.MINUTES;
				let diff = countdown(end, null, units);

				if (diff.days < 10) diff.days = "0" + diff.days;
				if (diff.hours < 10) diff.hours = "0" + diff.hours;
				if (diff.minutes < 10) diff.minutes = "0" + diff.minutes;

				return diff;

		},
		countProgress(start, end) {
				let total = countdown(end, start, countdown.MILLISECONDS).milliseconds;
				let fromNow = countdown(end, null, countdown.MILLISECONDS).milliseconds;
				let progress = (1 - (fromNow / total)) * 100;

				return progress.toFixed(1);
		}
	},
	created() {

		this.dateDifference = this.countDateDifference(this.endDate);
		this.progress = this.countProgress(this.startDate, this.endDate);

		setInterval(() => {
				this.dateDifference = this.countDateDifference(this.endDate);
				this.progress = this.countProgress(this.startDate, this.endDate);
		}, 1000);
	}
});
