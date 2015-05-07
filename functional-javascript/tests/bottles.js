import _ from "underscore";

const lyricSegment = (N) =>
    _.chain([])
        .push(`${N} bottles of beer on the wall,`)
        .push(`${N} bottles of beer.`)
        .push("Take one down, pass it around,")
        .tap((lyric) => {
            if (N > 1) {
                lyric.push(`${N-1} bottles of beer on the wall.`);
            } else {
                lyric.push(`No bottles of beer on the wall.`);
            }
        })
        .value();

const song = (start, end, lyricSegment) =>
    _.chain(_.range(start, end, -1))
        .reduce((acc, N) => acc.concat(lyricSegment(N)), [])
        .value();

console.log(song(100, 0, lyricSegment));
