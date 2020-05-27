/**
 * Handle rendering of each badge and all badges.
 */

const SHIELDS_API = 'https://img.shields.io/badge',
    SHIELDS_IMG = 'https://img.shields.io',
    GITHUB = 'https://github.com';

const STYLES = {
    FOR_THE_BADGE: '?style=for-the-badge',
    SOCIAL: '?style=for-the-badge'
};

/** Make a markdown badge for any inputs. Escapes URLs.
 *  TODO: Avoid escaping if interal URLs.
 **/
function makeBadge(title, imgUrl, target) {
    imgUrl = encodeURI(imgUrl);
    target = encodeURI(target);

    return `[![${title}](${imgUrl})](${target})`;
}

function useThisTemplateBadge(show, username, repoName) {
    if (show && username && repoName) {
        var text = 'Use_this_template',
            color = 'green';

        var title = 'Use this template',
            imgUrl = `${SHIELDS_API}/${text}-${color}${STYLES.FOR_THE_BADGE}`,
            extUrl = `${GITHUB}/${username}/${repoName}/generate`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function tagBadge(username, repoName) {
    if (username && repoName) {
        var title = 'GitHub tag',
            imgUrl = `${SHIELDS_IMG}/github/tag/${username}/${repoName}`,
            extUrl = `${GITHUB}/${username}/${repoName}/tags/`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function licenseBadge(licenseType, username, repoName) {
    if ((licenseType, username, repoName)) {
        var color = 'blue',
            branch = 'master';

        var title = `${licenseType} license`,
            imgUrl = `${SHIELDS_API}/License-${licenseType}-${color}.svg`,
            extUrl = `${GITHUB}/${username}/${repoName}/blob/${branch}/LICENSE`;

        return makeBadge(title, imgUrl, extUrl);
    }
    return '';
}

function genericBadge(generics) {
    const { preLabel, postLabel, color, isLarge, target } = generics;
    if (!postLabel) {
        return '';
    }

    var title = [
        preLabel,
        postLabel
    ].join(' ');

    if (preLabel) {
        var pieces = [
            preLabel,
            postLabel,
            color
        ];
    }
    else {
        var pieces = [
            postLabel,
            color
        ];
    }
    var shield = pieces.join('-').replace(' ', '_'),
        style = isLarge ? STYLES.FOR_THE_BADGE : '',
        imgUrl = `${SHIELDS_API}/${shield}${style}`;

    return makeBadge(title, imgUrl, target);
}

// TODO: Refactor to use a class.
function makeBadges() {
    var username = $('input[name="username"').val(),
        repoName = $('input[name="repo-name"').val(),
        licenseType = $('input[name="license-type"').val(),
        useThisTemplateIsChecked = $('input[name="use-this-template"').prop('checked');

    var generics = {
        preLabel: $('input[name="generic-pre-label"]').val(),
        postLabel: $('input[name="generic-post-label"]').val(),
        color: $('input[name="generic-color"]').val(),
        isLarge: $('input[name="generic-large"]').prop('checked'),
        target: $('input[name="generic-target"]').val()
    };

    return {
        tag: tagBadge(username, repoName),
        license: licenseBadge(licenseType, username, repoName),
        use: useThisTemplateBadge(useThisTemplateIsChecked, username, repoName),
        generic: genericBadge(generics)
    };
}