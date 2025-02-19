package de.ait.javalessons.streamapi;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class YouTubeAnalyzerTest {

    private static List<YoutubeVideo> videos = List.of(
            new YoutubeVideo("Как научиться программировать", "IT Channel", 15000000, 12000, 720, "Образование", true),
            new YoutubeVideo("Лучшие моменты матча", "Sports Channel", 500000, 8000, 600, "Спорт", false),
            new YoutubeVideo("Новый трек 2025", "Music Channel", 3000000, 25000, 240, "Музыка", true),
            new YoutubeVideo("Обзор новой игры", "Gaming Channel", 2000000, 15000, 900, "Игры", true),
            new YoutubeVideo("Как приготовить пиццу", "Cooking Channel", 800000, 10000, 1200, "Кулинария", false),
            new YoutubeVideo("Как приготовить кофе", "Cooking Channel", 100_000, 70000, 1400, "Кулинария", true)
    );

    @Test
    void testIsMore10MSuccess() {

        //Average
        YouTubeAnalyzer youTubeAnalyzer = new YouTubeAnalyzer();

        //Action
        boolean result = youTubeAnalyzer.isMore10M(videos);

        //Assert
        assertTrue(result);
    }

}
