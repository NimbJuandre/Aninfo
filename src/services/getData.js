import API from "./api";
import store from '../store'

export default {
  getSeason() {
    const currentDate = new Date();
    var seasons = {
      currentSeason: '',
      nextSeason: '',
      seasonYear: currentDate.getFullYear()
    }

    switch (currentDate.getMonth()) {
      case (12):
      case (1):
      case (2):
        seasons.currentSeason = 'WINTER';
        seasons.nextSeason = 'SPRING';
        break;
      case (3):
      case (4):
      case (5):
        seasons.currentSeason = 'SPRING';
        seasons.nextSeason = 'SUMMER';
        break;
      case (6):
      case (7):
      case (8):
        seasons.currentSeason = 'SUMMER';
        seasons.nextSeason = 'FALL';
        break;
      case (9):
      case (10):
      case (11):
        seasons.currentSeason = 'FALL';
        seasons.nextSeason = 'WINTER';
        break;
    }

    return seasons;
  },
  search(query) {
    var data = {};
    data.query = `query($id: Int, $type: MediaType, $isAdult:Boolean, $page: Int, $perPage: Int, $search: String) {
      Page(page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media(id: $id, search: $search, type: $type, isAdult: $isAdult, sort: POPULARITY_DESC) {
          id
          title {
            english
            romaji
            userPreferred
            native
          }
          coverImage {
            extraLarge
            large
          }
          bannerImage
          startDate {
            year
            month
            day
          }
          endDate {
            year
            month
            day
          }
          description
          season
          seasonYear
          type
          format
          status(version: 2)
          episodes
          duration
          chapters
          volumes
          genres
          synonyms
          source(version: 3)
          isAdult
          isLocked
          meanScore
          averageScore
          popularity
          favourites
          isFavouriteBlocked
          hashtag
          countryOfOrigin
          isLicensed
          isFavourite
          isRecommendationBlocked
          isFavouriteBlocked
          isReviewBlocked
          nextAiringEpisode {
            airingAt
            timeUntilAiring
            episode
          }
          relations {
            edges {
            id
            relationType(version: 2)
            node {
              id
              title {
              english
              userPreferred
              }
              format
              type
              status(version: 2)
              bannerImage
              coverImage {
              large
              }
            }
            }
          }
          characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
            edges {
            id
            role
            name
            voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
              id
              name {
              userPreferred
              }
              language: languageV2
              image {
              large
              }
            }
            node {
              id
              name {
              userPreferred
              }
              image {
              large
              }
            }
            }
          }
          staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
            edges {
            id
            role
            node {
              id
              name {
              userPreferred
              }
              language: languageV2
              image {
              large
              }
            }
            }
          }
          studios {
            edges {
            isMain
            node {
              id
              name
            }
            }
          }
          reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
            pageInfo {
            total
            }
            nodes {
            id
            summary
            rating
            ratingAmount
            user {
              id
              name
              avatar {
              large
              }
            }
            }
          }
          recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
            pageInfo {
            total
            }
            nodes {
            id
            rating
            userRating
            mediaRecommendation {
              id
              title {
              english
              userPreferred
              }
              format
              type
              status(version: 2)
              bannerImage
              coverImage {
              large
              }
            }
            user {
              id
              name
              avatar {
              large
              }
            }
            }
          }
          externalLinks {
            id
            site
            url
            type
            language
            color
            icon
            notes
            isDisabled
          }
          streamingEpisodes {
            site
            title
            thumbnail
            url
          }
          trailer {
            id
            site
          }
          rankings {
            id
            rank
            type
            format
            year
            season
            allTime
            context
          }
          tags {
            id
            name
            description
            rank
            isMediaSpoiler
            isGeneralSpoiler
            userId
          }
          mediaListEntry {
            id
            status
            score
          }
          stats {
            statusDistribution {
            status
            amount
            }
            scoreDistribution {
            score
            amount
            }
          }
        }
      }
    }`;
    data.variables = {
      page: 1,
      search: query,
      perPage: 20,
      isAdult: false,
      sort: "SEARCH_MATCH",
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getDetails(id) {
    var data = {};
    data.query = "query media($id:Int,$type:MediaType,$isAdult:Boolean){Media(id:$id,type:$type,isAdult:$isAdult){id title{english romaji userPreferred native}coverImage{extraLarge large}bannerImage startDate{year month day}endDate{year month day}description season seasonYear type format status(version:2)episodes duration chapters volumes genres synonyms source(version:3)isAdult isLocked meanScore averageScore popularity favourites isFavouriteBlocked hashtag countryOfOrigin isLicensed isFavourite isRecommendationBlocked isFavouriteBlocked isReviewBlocked nextAiringEpisode{airingAt timeUntilAiring episode}relations{edges{id relationType(version:2)node{id title{english userPreferred}format type status(version:2)bannerImage coverImage{large}}}}characterPreview:characters(perPage:6,sort:[ROLE,RELEVANCE,ID]){edges{id role name voiceActors(language:JAPANESE,sort:[RELEVANCE,ID]){id name{userPreferred}language:languageV2 image{large}}node{id name{userPreferred}image{large}}}}staffPreview:staff(perPage:8,sort:[RELEVANCE,ID]){edges{id role node{id name{userPreferred}language:languageV2 image{large}}}}studios{edges{isMain node{id name}}}reviewPreview:reviews(perPage:2,sort:[RATING_DESC,ID]){pageInfo{total}nodes{id summary rating ratingAmount user{id name avatar{large}}}}recommendations(perPage:7,sort:[RATING_DESC,ID]){pageInfo{total}nodes{id rating userRating mediaRecommendation{id title{english userPreferred}format type status(version:2)bannerImage coverImage{large}}user{id name avatar{large}}}}externalLinks{id site url type language color icon notes isDisabled}streamingEpisodes{site title thumbnail url}trailer{id site}rankings{id rank type format year season allTime context}tags{id name description rank isMediaSpoiler isGeneralSpoiler userId}mediaListEntry{id status score}stats{statusDistribution{status amount}scoreDistribution{score amount}}}}";
    data.variables = {
      id: id,
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getCharacters(id) {
    var data = {};
    data.query = "query media($id:Int,$page:Int){Media(id:$id){id characters(page:$page,sort:[ROLE,RELEVANCE,ID]){pageInfo{total perPage currentPage lastPage hasNextPage}edges{id role name voiceActorRoles(sort:[RELEVANCE,ID]){roleNotes dubGroup voiceActor{id name{userPreferred}language:languageV2 image{large}}}node{id name{userPreferred}image{large}}}}}}";
    data.variables = {
      id: id,
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getHomePageSections() {
    var seasons = this.getSeason();
    var data = {};

    data.query = "query($season:MediaSeason,$seasonYear:Int $nextSeason:MediaSeason,$nextYear:Int $type:MediaType){trending:Page(page:1,perPage:6){media(sort:TRENDING_DESC,type:$type,isAdult:false){...media}}season:Page(page:1,perPage:6){media(season:$season,seasonYear:$seasonYear,sort:POPULARITY_DESC,type:$type,isAdult:false){...media}}nextSeason:Page(page:1,perPage:6){media(season:$nextSeason,seasonYear:$nextYear,sort:POPULARITY_DESC,type:$type,isAdult:false){...media}}popular:Page(page:1,perPage:6){media(sort:POPULARITY_DESC,type:$type,isAdult:false){...media}}top:Page(page:1,perPage:10){media(sort:SCORE_DESC,type:$type,isAdult:false){...media}}}fragment media on Media{id title{english userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity mediaListEntry{id status}nextAiringEpisode{airingAt timeUntilAiring episode}studios(isMain:true){edges{isMain node{id name}}}}";
    data.variables = {
      season: seasons.currentSeason,
      seasonYear: seasons.seasonYear,
      nextSeason: seasons.nextSeason,
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getTrending() {
    var data = {};

    data.query = "query($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat]$status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){Page(page:$page,perPage:20){pageInfo{total perPage currentPage lastPage hasNextPage}media(id:$id type:$type season:$season format_in:$format status:$status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode{airingAt timeUntilAiring episode}mediaListEntry{id status}studios(isMain:true){edges{isMain node{id name}}}}}}";
    data.variables = {
      sort: ["TRENDING_DESC", "POPULARITY_DESC"],
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getThisSeason() {
    var data = {};
    var seasons = this.getSeason();

    data.query = "query($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat]$status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){Page(page:$page,perPage:20){pageInfo{total perPage currentPage lastPage hasNextPage}media(id:$id type:$type season:$season format_in:$format status:$status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode{airingAt timeUntilAiring episode}mediaListEntry{id status}studios(isMain:true){edges{isMain node{id name}}}}}}";
    data.variables = {
      page: 1,
      season: seasons.currentSeason,
      seasonYear: seasons.seasonYear,
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getNextSeason() {
    var data = {};
    var seasons = this.getSeason();

    data.query = "query($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat]$status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){Page(page:$page,perPage:20){pageInfo{total perPage currentPage lastPage hasNextPage}media(id:$id type:$type season:$season format_in:$format status:$status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode{airingAt timeUntilAiring episode}mediaListEntry{id status}studios(isMain:true){edges{isMain node{id name}}}}}}";
    data.variables = {
      page: 1,
      season: seasons.currentSeason,
      seasonYear: seasons.seasonYear,
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getMostPopular() {
    var data = {};

    data.query = "query($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat]$status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){Page(page:$page,perPage:20){pageInfo{total perPage currentPage lastPage hasNextPage}media(id:$id type:$type season:$season format_in:$format status:$status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode{airingAt timeUntilAiring episode}mediaListEntry{id status}studios(isMain:true){edges{isMain node{id name}}}}}}"
    data.variables = {
      page: 1,
      sort: 'POPULARITY_DESC',
      type: store.getters.typeName,
    };
    return API().post("/", data);
  },
  getTop() {
    var data = {};

    data.query = "query($page:Int = 1 $id:Int $type:MediaType $isAdult:Boolean = false $search:String $format:[MediaFormat]$status:MediaStatus $countryOfOrigin:CountryCode $source:MediaSource $season:MediaSeason $seasonYear:Int $year:String $onList:Boolean $yearLesser:FuzzyDateInt $yearGreater:FuzzyDateInt $episodeLesser:Int $episodeGreater:Int $durationLesser:Int $durationGreater:Int $chapterLesser:Int $chapterGreater:Int $volumeLesser:Int $volumeGreater:Int $licensedBy:[Int]$isLicensed:Boolean $genres:[String]$excludedGenres:[String]$tags:[String]$excludedTags:[String]$minimumTagRank:Int $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC]){Page(page:$page,perPage:20){pageInfo{total perPage currentPage lastPage hasNextPage}media(id:$id type:$type season:$season format_in:$format status:$status countryOfOrigin:$countryOfOrigin source:$source search:$search onList:$onList seasonYear:$seasonYear startDate_like:$year startDate_lesser:$yearLesser startDate_greater:$yearGreater episodes_lesser:$episodeLesser episodes_greater:$episodeGreater duration_lesser:$durationLesser duration_greater:$durationGreater chapters_lesser:$chapterLesser chapters_greater:$chapterGreater volumes_lesser:$volumeLesser volumes_greater:$volumeGreater licensedById_in:$licensedBy isLicensed:$isLicensed genre_in:$genres genre_not_in:$excludedGenres tag_in:$tags tag_not_in:$excludedTags minimumTagRank:$minimumTagRank sort:$sort isAdult:$isAdult){id title{userPreferred}coverImage{extraLarge large color}startDate{year month day}endDate{year month day}bannerImage season seasonYear description type format status(version:2)episodes duration chapters volumes genres isAdult averageScore popularity nextAiringEpisode{airingAt timeUntilAiring episode}mediaListEntry{id status}studios(isMain:true){edges{isMain node{id name}}}}}}";
    data.variables = {
      page: 1,
      sort: 'SCORE_DESC',
      type: store.getters.typeName,
    };
    return API().post("/", data);
  }
};