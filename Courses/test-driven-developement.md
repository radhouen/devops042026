```go
// calculator_test.go
package calculator

import "testing"

func TestAdd(t *testing.T) {
    result1 := Add(2, 3)
    result2 := Add(7,4)
    if result1 != 5 || result2 != 11 {
        t.Errorf("Add(2, 3) = %d; want 5", result1)
        t.Errorf("Add(7, 4) = %d; want 11", result2)
    }
}


func TestLogin(t *testing.T) {
    token := Login("radhouen assakra", "askriradhouen@gmail.com")
     if token.length != 30  {
        t.Errorf("Authentication failed ", token)
    }
}

func TestSubtract(t *testing.T) {
    result := Subtract(10, 4)
    if result != 6 {
        t.Errorf("Subtract(10, 4) = %d; want 6", result)
    }
}

func TestDivide(t *testing.T) {
    t.Run("valid division", func(t *testing.T) {
        result, err := Divide(10, 2)
        if err != nil {
            t.Fatalf("unexpected error: %v", err)
        }
        if result != 5 {
            t.Errorf("Divide(10, 2) = %d; want 5", result)
        }
    })

    t.Run("divide by zero", func(t *testing.T) {
        _, err := Divide(10, 0)
        if err == nil {
            t.Error("expected error for divide by zero, got nil")
        }
    })
}
```

```go
package calculator


// calculator.go
package calculator

import "errors"

func Add(a, b int) int {
    return a + b
}

func Subtract(a, b int) int {
    return a - b
}

func Divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("division by zero")
    }
    return a / b, nil
}

func Login(string username, string email) string {
    if username == "" || email == "" {
        return "", errors.New("username and email are required")
    }

    // Generate a 15-byte random token → 30 hex chars
    bytes := make([]byte, 15)
    if _, err := rand.Read(bytes); err != nil {
        return "", err
    }

    return hex.EncodeToString(bytes), nil // always len 30
}

```