-- ============================================================
-- RainIntel Database Migration 001
-- Add MVP assessment fields required by the frontend
-- ============================================================

-- ============================================================
-- 1. BUILDING INFORMATION
-- ============================================================

ALTER TABLE FIELD_ASSESSMENTS ADD (
    BUILDING_NAME VARCHAR2(200),
    OWNER_NAME VARCHAR2(150),
    MOBILE VARCHAR2(20),
    PIN_CODE VARCHAR2(10),
    CONSTRUCTION_YEAR NUMBER(4),
    NUMBER_OF_FLOORS NUMBER(3)
);

-- ============================================================
-- 2. GPS INFORMATION
-- ============================================================

ALTER TABLE FIELD_ASSESSMENTS ADD (
    ELEVATION_M NUMBER(10,2),
    GPS_ACCURACY_M NUMBER(10,2)
);

-- ============================================================
-- 3. ROOF INFORMATION
-- ============================================================

ALTER TABLE FIELD_ASSESSMENTS ADD (
    ROOF_LENGTH_M NUMBER(12,2),
    ROOF_WIDTH_M NUMBER(12,2),
    ROOF_SHAPE VARCHAR2(50),
    CATCHMENT_EFFICIENCY NUMBER(5,4),
    DRAINAGE_TYPE VARCHAR2(100)
);

-- ============================================================
-- 4. SITE INFORMATION
-- ============================================================

ALTER TABLE FIELD_ASSESSMENTS ADD (
    SOIL_TYPE VARCHAR2(100),
    GROUNDWATER_LEVEL_M NUMBER(10,2),
    LAND_AVAILABILITY VARCHAR2(30),
    EXISTING_RWH VARCHAR2(20)
);

-- ============================================================
-- 5. VALIDATION CONSTRAINTS
-- ============================================================

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_CONSTRUCTION_YEAR
    CHECK (
        CONSTRUCTION_YEAR IS NULL
        OR CONSTRUCTION_YEAR BETWEEN 1800 AND 2100
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_FLOORS
    CHECK (
        NUMBER_OF_FLOORS IS NULL
        OR NUMBER_OF_FLOORS > 0
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_ELEVATION
    CHECK (
        ELEVATION_M IS NULL
        OR ELEVATION_M >= -500
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_GPS_ACCURACY
    CHECK (
        GPS_ACCURACY_M IS NULL
        OR GPS_ACCURACY_M >= 0
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_ROOF_LENGTH
    CHECK (
        ROOF_LENGTH_M IS NULL
        OR ROOF_LENGTH_M >= 0
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_ROOF_WIDTH
    CHECK (
        ROOF_WIDTH_M IS NULL
        OR ROOF_WIDTH_M >= 0
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_CATCHMENT
    CHECK (
        CATCHMENT_EFFICIENCY IS NULL
        OR CATCHMENT_EFFICIENCY BETWEEN 0 AND 1
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_GROUNDWATER
    CHECK (
        GROUNDWATER_LEVEL_M IS NULL
        OR GROUNDWATER_LEVEL_M >= 0
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_LAND
    CHECK (
        LAND_AVAILABILITY IS NULL
        OR LAND_AVAILABILITY IN (
            'AVAILABLE',
            'NOT_AVAILABLE',
            'LIMITED'
        )
    );

ALTER TABLE FIELD_ASSESSMENTS ADD
    CONSTRAINT CK_ASSESSMENT_EXISTING_RWH
    CHECK (
        EXISTING_RWH IS NULL
        OR EXISTING_RWH IN (
            'YES',
            'NO'
        )
    );

COMMIT;

-- ============================================================
-- 6. VERIFICATION
-- ============================================================

SELECT
    COLUMN_NAME,
    DATA_TYPE,
    DATA_LENGTH,
    DATA_PRECISION,
    DATA_SCALE,
    NULLABLE
FROM USER_TAB_COLUMNS
WHERE TABLE_NAME = 'FIELD_ASSESSMENTS'
ORDER BY COLUMN_ID;