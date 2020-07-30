import Editor from './editor/editor';
import HistoryList from './history-list';
import { AbstractContent, History } from '../abstract-content';

export default class HistoryContent extends AbstractContent {
	data: History[] | null = null;
	historyList: AbstractContent;

	constructor() {
		super();
		this.dom = document.createElement('div');
		this.historyList = new HistoryList();
		this.init();
	}

	init() {
		this.dom?.appendChild(new Editor().getDom());
		this.dom?.appendChild(new HistoryList().getDom());
	}

	load(histories: History[]): void {
		if (!this.data) {
			this.data = histories;
		}
		this.historyList.load(this.data);
	}
}
