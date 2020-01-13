<template>
	<header :class="{ active: active }">
		<div class="container grid">
			<nav>
				<div class="branding">
					<p @click="openInternalLink('home')" class="branding__text">Keimeno.party</p>
				</div>
				<div class="hamburger-menu">
					<p class="hamburger-menu__text" @click="active = !active">
						<span class="icon">{{ active ? '❌' : '🍔' }}</span>
						<span class="text">{{ active ? 'close' : 'menu' }}</span>
					</p>
				</div>
			</nav>
			<div class="hamburger-menu__content" v-show="active">
				<ul>
					<li @click="openInternalLink('home')">
						<p style="margin: 0;" :class="{ active: !activePage}" class="link">Overview</p>
					</li>
					<li ref="link-projects">
						<p
							@click="toggleDropdown('link-projects')"
							:class="{ active: activePage === 'projects'}"
							class="link"
							data-polyclip="0 0, 100% 0, 100% 0, 0 0"
						>
							Projects
							<span v-html="caretDown"></span>
						</p>
						<div ref="link-projects-items">
							<ul>
								<li
									v-for="(link, index) in projects"
									@click="openInternalLink('projects', { id: link.to })"
									:key="index"
								>{{ link.displayName }}</li>
							</ul>
						</div>
					</li>
					<li ref="link-open-source">
						<p
							@click="toggleDropdown('link-open-source')"
							:class="{ active: activePage === 'open-source'}"
							class="link"
						>
							Open Source
							<span v-html="caretDown"></span>
						</p>
						<div ref="link-open-source-items">
							<ul>
								<li
									v-for="(link, index) in projects"
									@click="openInternalLink('open-source', { id: link.to })"
									:key="index"
								>{{ link.displayName }}</li>
							</ul>
						</div>
					</li>
				</ul>
				<div class="hamburger-menu__links">
					<p class="link" style="margin-bottom: 5px;">Links</p>
					<portfolio-links :hasLowContrastBackground="true" />
				</div>
			</div>
		</div>
	</header>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

import PortfolioLinks from "../base/Links.vue";

import linkMixin from "@/mixins/link.mixin";

import TList from "@/types/ListType";

import { GET_PROJECTS_LIST } from "../../store/types/getters.type";

export default Vue.extend({
	name: "PortfolioHeader",
	components: {
		PortfolioLinks
	},
	mixins: [linkMixin],
	data: () => ({
		active: false,
		caretDown:
			'<svg height="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" aria-labelledby="title" aria-describedby="desc" role="img" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Angle Down</title><desc>A line styled icon from Orion Icon Library.</desc><path data-name="layer1"fill="none" stroke="#f8f8f8" stroke-miterlimit="10" stroke-width="5" d="M20 26l11.994 14L44 26"stroke-linejoin="round" stroke-linecap="round"></path></svg>',
		activePage: "",
		projects: [] as TList[]
	}),
	methods: {
		...mapGetters([GET_PROJECTS_LIST]),
		openInternalLink(name: string, params?: object) {
			(this as any).openInternalLinkByName(name, params);
			// @ts-ignore
			this.$refs["link-projects"].classList.remove("opened");
			// @ts-ignore
			this.$refs["link-open-source"].classList.remove("opened");

			// @ts-ignore
			this.$refs["link-projects-items"].style.height = "0";
			// @ts-ignore
			this.$refs["link-open-source-items"].style.height = "0";
			this.active = false;
		},
		toggleDropdown(ref: string) {
			// @ts-ignore
			const refClassList: any = this.$refs[ref].classList;
			const items: any = this.$refs[`${ref}-items`];
			const opened = "opened";

			refClassList.toggle(opened);

			if (refClassList.contains(opened)) {
				items.style.height = items.scrollHeight + "px";
			} else {
				items.style.height = "0";
			}
		},
		updateActivePage() {
			const path = this.$route.fullPath.split("/");
			this.activePage = path[1];
		}
	},
	mounted() {
		this.updateActivePage();

		// retrieves projects list
		this.projects = this[GET_PROJECTS_LIST]();
	},
	watch: {
		$route() {
			this.updateActivePage();
		}
	}
});
</script>

<style lang="scss" scoped>
@import "../../scss/variables";

$headerHeight: 70px;

header {
	position: fixed;
	width: 100%;
	height: $headerHeight;
	font-size: 20px;
	z-index: 50;
	transition: height 0.15s ease-out;
	color: black;

	background-color: $accent;
	box-shadow: 0px 5px rgba($color: $accentShadow, $alpha: 1);

	@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
		transition: none;
	}

	&.active {
		background-color: $invertedBackground;
		height: 100vh;
		box-shadow: none;

		.grid {
			nav {
				color: $invertedText;
			}

			.hamburger-menu__content {
				height: calc(100%);
				color: $invertedText;

				.link {
					font-size: 24px;
					margin-top: 20px;

					&.active {
						text-decoration: underline;
					}
				}

				.hamburger-menu__links {
					position: relative;
					z-index: 60;
					background-color: transparent;
					animation: invertedBackground 0s 0.25s forwards;
					height: 160px;
					padding-top: 5px;
				}

				@keyframes invertedBackground {
					0% {
						background-color: transparent;
					}
					100% {
						background-color: $invertedBackground;
					}
				}

				> ul {
					padding: 30px 0;
					height: calc(100% - 70px * 3);
					max-height: calc(100% - 70px * 3);
					overflow-y: scroll;
					scrollbar-width: thin;

					&::-webkit-scrollbar {
						width: 5px;
						border-radius: 5px;
					}

					&::-webkit-scrollbar-track {
						background: #f1f1f1;
						border-radius: 5px;
					}

					&::-webkit-scrollbar-thumb {
						background: #888;
						border-radius: 5px;
					}

					&::-webkit-scrollbar-thumb:hover {
						background: #555;
						border-radius: 5px;
					}

					li {
						text-decoration: none;
						list-style: none;

						p {
							position: relative;
							z-index: 1;
							display: flex;
							cursor: pointer;

							&:hover {
								text-decoration: underline;
							}
						}

						> div {
							font-size: 0px;
							z-index: 55;
							height: 0;
							transition: clip-path 0.25s, opacity 0.25s,
								height 0.25s;
							clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

							ul {
								li {
									cursor: pointer;

									&:hover {
										text-decoration: underline;
									}
								}
							}
						}

						&.opened > div {
							font-size: 20px;
							clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
						}

						@media all and (-ms-high-contrast: none),
							(-ms-high-contrast: active) {
							> div {
								opacity: 0;
							}

							&.opened > div {
								opacity: 1;
							}
						}

						@supports (-ms-ime-align: auto) or
							(-ms-accelerator: true) {
							> div {
								opacity: 0;
							}

							&.opened > div {
								opacity: 1;
							}
						}
					}
				}
			}
		}
	}

	.grid {
		height: inherit;

		nav {
			height: 70px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			color: $text;

			.branding {
				.branding__text {
					cursor: pointer;
					user-select: none;

					&:hover {
						text-decoration: underline;
					}
				}
			}

			.hamburger-menu {
				.hamburger-menu__text {
					cursor: pointer;
					user-select: none;
					text-transform: uppercase;
					transition: all 0.15s;

					span {
						&:last-child {
							text-decoration: underline;
						}
					}

					&:hover {
						opacity: 0.5;
					}
				}
			}
		}
	}
}
</style>
