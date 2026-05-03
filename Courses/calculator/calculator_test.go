package calculator

import "testing"

func TestAdd(t *testing.T) {
    cases := []struct {
        name     string
        a, b     float64
        expected float64
    }{
        {"two positives", 2, 3, 5},
        {"negative numbers", -1, -2, -3},
        {"zeros", 0, 0, 0},
    }
    for _, tc := range cases {
        t.Run(tc.name, func(t *testing.T) {
            result := Add(tc.a, tc.b)
            if result != tc.expected {
                t.Errorf("Add(%v, %v) = %v; want %v", tc.a, tc.b, result, tc.expected)
            }
        })
    }
}

func TestSubtract(t *testing.T) {
    result := Subtract(10, 4)
    if result != 6 {
        t.Errorf("Subtract(10, 4) = %v; want 6", result)
    }
}

func TestMultiply(t *testing.T) {
    result := Multiply(3, 4)
    if result != 12 {
        t.Errorf("Multiply(3, 4) = %v; want 12", result)
    }
}

func TestDivide(t *testing.T) {
    t.Run("valid", func(t *testing.T) {
        result, err := Divide(10, 2)
        if err != nil {
            t.Fatalf("unexpected error: %v", err)
        }
        if result != 5 {
            t.Errorf("Divide(10, 2) = %v; want 5", result)
        }
    })

    t.Run("divide by zero", func(t *testing.T) {
        _, err := Divide(10, 0)
        if err == nil {
            t.Error("expected error, got nil")
        }
    })
}