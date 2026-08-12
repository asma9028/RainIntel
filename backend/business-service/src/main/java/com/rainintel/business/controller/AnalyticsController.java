package com.rainintel.business.controller;

import com.rainintel.business.repository.FieldAssessmentRepository;
import com.rainintel.business.repository.RwhRecommendationRepository;
import com.rainintel.business.repository.RwhResultRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/analytics")
public class AnalyticsController {

    private final FieldAssessmentRepository assessmentRepository;
    private final RwhResultRepository rwhResultRepository;
    private final RwhRecommendationRepository rwhRecommendationRepository;

    public AnalyticsController(FieldAssessmentRepository assessmentRepository,
                               RwhResultRepository rwhResultRepository,
                               RwhRecommendationRepository rwhRecommendationRepository) {
        this.assessmentRepository = assessmentRepository;
        this.rwhResultRepository = rwhResultRepository;
        this.rwhRecommendationRepository = rwhRecommendationRepository;
    }

    @GetMapping("/summary")
    public ResponseEntity<Map<String, Object>> getSummary() {
        long totalAssessments = assessmentRepository.count();
        Double totalHarvest = rwhResultRepository.sumHarvestableWater();
        Double avgConf = rwhRecommendationRepository.avgConfidenceScore();

        Map<String, Object> summary = new HashMap<>();
        summary.put("totalAssessments", totalAssessments);
        summary.put("totalHarvestedLiters", totalHarvest != null ? totalHarvest : 0.0);
        summary.put("averageConfidence", avgConf != null ? Math.round(avgConf * 10.0) / 10.0 : 0.0);

        return ResponseEntity.ok(summary);
    }

    @GetMapping("/district-ranking")
    public ResponseEntity<List<Map<String, Object>>> getDistrictRanking() {
        List<Object[]> rawRanking = rwhResultRepository.getDistrictRanking();
        List<Map<String, Object>> ranking = new ArrayList<>();

        for (Object[] row : rawRanking) {
            Map<String, Object> entry = new HashMap<>();
            entry.put("districtName", row[0]);
            entry.put("assessmentCount", row[1]);
            entry.put("totalHarvestedLiters", row[2]);
            ranking.add(entry);
        }

        return ResponseEntity.ok(ranking);
    }
}
