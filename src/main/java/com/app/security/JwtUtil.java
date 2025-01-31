package com.app.security;

import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.security.Key;
import java.util.Date;
public class JwtUtil {
	private static final String Secrete_key = "wertyuiasdfghjkxcvbnm23456xcvbf234";
	private static final long Expriation_Time = 86400000;
	
	private final Key key = Keys.hmacShaKeyFor(Secrete_key.getBytes());
	
	public String generateToken(String username)
	{
		return Jwts.builder().setSubject(username).setIssuedAt(new Date()).setExpiration(new Date(System.currentTimeMillis()+Expriation_Time)).signWith(key, SignatureAlgorithm.HS256).compact();
	}
	
	public String extractUsername(String token)
	{
		return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
	}
	
	public boolean validateToken(String token)
	{
		try {
		Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
		return true;
		}catch (JwtException | IllegalArgumentException exception) {
			return false;
		}
		
	}
}
