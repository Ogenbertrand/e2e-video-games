package com.OgenBertrand.SecurityConfig;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;

public class JwtUtil {

    public static Jws<Claims> parseJwt(String jwtToken, String secretKey) throws JwtException {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(jwtToken);
    }
}